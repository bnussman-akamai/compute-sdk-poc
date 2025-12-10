import type { GetLinodeInstanceResponse, Account, PostLinodeInstanceData, PostVpcSubnetData, GetVolumesData } from '@akamai/openapi-ts'

type Linode = GetLinodeInstanceResponse;
type LinodeSpecs = Linode['specs'];

type CreateLinodePayload = PostLinodeInstanceData['body'];

const payload: CreateLinodePayload = {
  region: 'us-east',
  type: 'g6-standard-1'
};

const subnet: PostVpcSubnetData = {
  body: { label: '', ipv4: ''}
};
