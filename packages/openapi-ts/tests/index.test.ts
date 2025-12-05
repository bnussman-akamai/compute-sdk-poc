import { describe, expect, expectTypeOf, test } from "vitest";
import { getLinodeInstance, postLinodeInstance } from "../src";
import { http, HttpResponse } from 'msw'
import { server } from "./msw";

describe("TypeScript types", () => {
  test("region and type should be required in the linode create payload but everything else should be optional", () => {
    expectTypeOf(postLinodeInstance).toBeFunction();
    expectTypeOf(postLinodeInstance).parameter(0).toExtend<{ body: { region: string, type: string, image?: string | null, tags?: string[] } }>();
  });

  test("the type for a function to fetch a Linode", () => {
    expectTypeOf(getLinodeInstance).toBeFunction();
    expectTypeOf(getLinodeInstance).parameter(0).toExtend<{ path: { linodeId: number } }>();
  });

  test("the type for the return type when fetching a Linode", async () => {
    const mockLinode = { id: 1, label: 'linode-1' };

    server.use(
      http.get('https://api.linode.com/v4/linode/instances/:id', () => {
        return HttpResponse.json(mockLinode);
      })
    )

    const linode = await getLinodeInstance({ path: { linodeId: 1 } });

    expect(linode).toStrictEqual(mockLinode);
    expectTypeOf(linode).toExtend<{ id: number, label: string }>();
  });
});
