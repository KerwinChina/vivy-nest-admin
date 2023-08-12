import { Modal, ModalProps, Tabs } from 'antd'
import type { TabsProps } from 'antd'

const PreviewModal: React.FC<ModalProps> = (props) => {
  const items: TabsProps['items'] = [
    {
      key: 'Nest',
      label: `xxx.dto`,
      children: (
        <Tabs
          items={[
            {
              key: '3',
              label: `xxxx.serve`,
              children: `Content of Tab Pane 3`,
            },
            {
              key: '11',
              label: `xxx.dto`,
              children: `Content of Tab Pane 1`,
            },
            {
              key: '12',
              label: `xxx.tsx`,
              children: `Content of Tab Pane 2`,
            },
            {
              key: '13',
              label: `xxxx.serve`,
              children: `Content of Tab Pane 3`,
            },
          ]}
        />
      ),
    },
    {
      key: 'React',
      label: `xxx.tsx`,
      children: (
        <Tabs
          items={[
            {
              key: '21',
              label: `xxx.dto`,
              children: `Content of Tab Pane 1`,
            },
            {
              key: '22',
              label: `xxx.tsx`,
              children: `Content of Tab Pane 2`,
            },
            {
              key: '23',
              label: `xxxx.serve`,
              children: `Content of Tab Pane 3`,
            },
            {
              key: '31',
              label: `xxx.dto`,
              children: `Content of Tab Pane 1`,
            },
            {
              key: '32',
              label: `xxx.tsx`,
              children: `Content of Tab Pane 2`,
            },
            {
              key: '33',
              label: `xxxx.serve`,
              children: `Content of Tab Pane 3`,
            },
          ]}
        />
      ),
    },
  ]

  return (
    <Modal {...props} title="代码预览" footer={null} width={1000}>
      <Tabs tabBarStyle={{ marginBottom: 0 }} items={items} />
    </Modal>
  )
}

export default PreviewModal
