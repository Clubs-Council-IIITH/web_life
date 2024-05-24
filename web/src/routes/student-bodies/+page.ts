import type { PageLoad } from './$types';
export const load: PageLoad = async ({ parent, data }) => {
  await parent()
  let { page_server_data } = data;
  // console.log(JSON.stringify(data,null,2));
  return {
    page_server_data
  }
}