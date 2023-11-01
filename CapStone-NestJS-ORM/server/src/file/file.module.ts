import { Module, UnsupportedMediaTypeException } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import * as path from 'path'
import { StringUtils } from 'src/utils/string.utils'
import { FileController } from './file.controller'
import { FileService } from './file.service'

@Module({
  imports: [
    MulterModule.register({
      fileFilter(_, file, callback) {
        if (file.mimetype.startsWith('image/')) {
          return callback(null, true)
        }

        return callback(new UnsupportedMediaTypeException('Only Support Media Type JPG, JPEG, PNG, GIF'), false)
      },
      limits: {
        fileSize: 10e6,
      },
      storage: diskStorage({
        destination: process.cwd() + '/assets/images',
        filename(_, file, callback) {
          const extension = path.extname(file.originalname)
          const name = file.originalname.slice(0, file.originalname.lastIndexOf('.'))
          const fileName = `${Date.now()}-${StringUtils.toSlug(name)}${extension}`

          callback(null, fileName)
        },
      }),
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
