import type { GetLinodeInstance200, XFilter } from '@akamai/kubb'

type Linode = GetLinodeInstance200;

// Type is not perfectly correct. The fields should always be defined. Not optional with a `?`
// Kubb needs an option like https://heyapi.dev/openapi-ts/configuration/parser#properties-required-by-default to correct this
type LinodeSpecs = Linode['specs'];
