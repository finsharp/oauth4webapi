import { test, flow, modules } from '../runner.js'

for (const module of modules('client-secret-basic')) {
  test.serial(flow(), module)
}
