// @ts-nocheck
import type { PageLoad } from './$types';
export const load = async ({ parent, data }: Parameters<PageLoad>[0]) => {
    await parent()
    let { page_server_data } = data
    return {
      page_server_data
    }
  }