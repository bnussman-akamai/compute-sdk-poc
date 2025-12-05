import { getLinodeInstance, setConfig } from '@akamai/kubb'

setConfig({
  baseURL: 'https://api.linode.com',
  headers: {
    Authorization: `Bearer ${process.env.LINODE_API_TOKEN}`,
  },
})

// Should we move the API version (v4 / v4beta) into the baseURL rather than having it as a parameter on each request?
const linode = await getLinodeInstance('v4', 100);

console.log("Linode Response:", linode)
