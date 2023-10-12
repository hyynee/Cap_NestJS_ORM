import { vars } from '@/configs/theme'
import { Avatar, Box, Group, Menu, Stack, Text } from '@mantine/core'
import {
  IconBellFilled,
  IconCheck,
  IconChevronDown,
  IconMessageCircle,
} from '@tabler/icons-react'
import { FC } from 'react'
import { classes } from './user-menu.css'

interface UserMenuProps {}

export const UserMenu: FC<UserMenuProps> = (props) => {
  return (
    <Group gap={0}>
      <Box
        display={'flex'}
        c={vars.colors.gray[6]}
        className={classes.menuItem}
      >
        <IconBellFilled />
      </Box>

      <Box
        display={'flex'}
        c={vars.colors.gray[6]}
        className={classes.menuItem}
      >
        <IconMessageCircle />
      </Box>

      <Box
        display={'flex'}
        className={classes.menuItem}
      >
        <Avatar
          src={'/img/avatar.jpg'}
          size={'sm'}
        />
      </Box>

      <Menu
        position='bottom-end'
        width={300}
      >
        <Menu.Target>
          <Box
            display={'flex'}
            c={vars.colors.gray[6]}
            className={classes.menuItem}
          >
            <IconChevronDown size={22} />
          </Box>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Currently in</Menu.Label>
          <Menu.Item bg={'gray.1'}>
            <Group
              wrap='nowrap'
              gap={'xs'}
            >
              <Avatar
                src={'/img/avatar.jpg'}
                size={'lg'}
              />

              <Box
                style={{
                  flex: 1,
                }}
              >
                <Text
                  inline
                  fw={500}
                  fz={14}
                >
                  Bình Nguyễn
                </Text>
                <Text
                  inline
                  fw={'lighter'}
                  fz={12}
                >
                  Personal
                </Text>
                <Text
                  inline
                  fw={500}
                  w={180}
                  fz={12}
                  c={'dimmed'}
                  truncate
                >
                  duybinh.nguyen2311@gmail.comasdassadasdasdasd
                </Text>
              </Box>

              <Box>
                <IconCheck size={16} />
              </Box>
            </Group>
          </Menu.Item>

          <Menu.Label>Your accounts</Menu.Label>
          {['Add account', 'Convert to business'].map((item) => {
            return (
              <Menu.Item
                fw={'bold'}
                key={item}
              >
                {item}
              </Menu.Item>
            )
          })}

          <Menu.Label>More options</Menu.Label>
          {[
            'Settings',
            'Tune your home feed',
            'Get help',
            'See terms of service',
            'See privacy policy',
            'Log out',
          ].map((item) => {
            return (
              <Menu.Item
                fw={'bold'}
                key={item}
              >
                {item}
              </Menu.Item>
            )
          })}
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}
