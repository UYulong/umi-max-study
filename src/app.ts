/* 运行时配置 */
import { history } from '@umijs/max'
import type { RequestConfig } from '@umijs/max';
import type { RunTimeLayoutConfig } from '@umijs/max';
import '@/utils/init-lean-clound';

interface InitState {
  [key: string]: string
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitState> {
  return JSON.parse(localStorage.getItem('userInfo')!) || {}
};

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    onPageChange: () => {
      const { sessionToken } = initialState!
      if (!sessionToken) {
        history.push('/login')
      }
    }
  };
};


// 请求配置 hFQHyhMebjoXcdgJkKyElPQV6gIQbAkYacbqsZbBqzZBXzoN2x2BarcANepdLU5m-cn-n1
export const request: RequestConfig = {
  timeout: 1000 * 10,

  errorConfig: {
    errorHandler() {
    },
    errorThrower() {
    }
  },

  requestInterceptors: [
    (config: any) => {
      config.url = 'https://bh3oaub5.lc-cn-n1-shared.com/1.1' + config.url
      config.headers = {
        'X-LC-Id': 'bH3oAUB5fJoXNzyv0aJyNL5a-gzGzoHsz',
        'X-LC-Key': 'dFkMEyRbfCQWfa6z2LHfQdJs',
        'Content-Type': 'application/json',
      }
      return { ...config }
    }
  ],

  responseInterceptors: [
    (response: any) => {
      return response
    },
  ]
};
