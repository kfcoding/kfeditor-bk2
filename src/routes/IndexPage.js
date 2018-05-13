import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Editor from '../components/Editor';
import { Layout, Menu, Dropdown, Icon } from 'antd';

import Example from '../components/Example';

import {Value} from 'slate';
const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              }
            ],
          },
        ],
      },
    ],
  },
});

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/" style={{fontSize: '12px'}}><Icon type="edit" style={{marginRight: '10px'}}/> 重命名</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.alipay.com/" style={{fontSize: '12px'}}><Icon type="link" style={{marginRight: '10px'}}/> 复制地址</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="http://www.taobao.com/" style={{color: '#e05353', fontSize: '12px'}}><Icon type="close" style={{marginRight: '10px'}}/> 删除</a>
    </Menu.Item>
  </Menu>
);

function IndexPage() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
        </Menu>
      </Header>
      <Content style={{padding: '40px 50px'}}>
        <Layout style={{padding: '24px 0', background: '#fff'}}>
          <Sider width={250} style={{background: '#fff'}}
                 breakpoint="lg"
                 collapsedWidth="0"
                 trigger="null"
                 onCollapse={(collapsed, type) => {
                   console.log(collapsed, type);
                 }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{height: '100%'}}
            >
              <SubMenu key="sub1" title={<span>ubnav 1</span>}>
                <Menu.Item key="1">option1<span style={{float: 'right'}}><Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
      <Icon type="ellipsis" />
    </a>
  </Dropdown></span></Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span>subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">option8</Menu.Item>
            </Menu>
          </Sider>
          <Content style={{padding: '0 24px', minHeight: 980}}>
            {/*<Example/>*/}
            <Editor content={initialValue}/>
          </Content>
        </Layout>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>

  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
