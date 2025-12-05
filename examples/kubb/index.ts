import { getLinodeInstance, type GetLinodeInstance200, postLinodeInstanceMutationRequestSchema, setConfig } from '@akamai/kubb'

type LinodeSpecs = GetLinodeInstance200['specs'];

const linodePayload = postLinodeInstanceMutationRequestSchema.parse({
  region: 'us-east',
  type: 'g6-standard-1',
})

console.log("Linode Payload:", linodePayload)

setConfig({
  baseURL: 'https://api.linode.com'
})

const linode = await getLinodeInstance('v4', 100);

console.log("Linode Response:", linode)
