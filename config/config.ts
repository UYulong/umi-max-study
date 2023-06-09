import { defineConfig } from '@umijs/max';
import routes from './routes'
import defaultSettings from './defaultSettings'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  dva: {},
  initialState: {},
  request: {
    dataField: ''
  },
  layout: {
    locale: false,
    ...defaultSettings
  },
  // mock: false,
  routes,
  npmClient: 'pnpm',
});

