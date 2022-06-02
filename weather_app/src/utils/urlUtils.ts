export const replacePlaceholders = (str: string, mapObj: any) =>
  str.replace(
    new RegExp(
      Object.keys(mapObj)
        .map((key) => `{${key}}`)
        .join("|"),
      "gi"
    ),
    (matched) => mapObj[matched.substring(1, matched.length - 1)]
  );

export const replaceQueryParams = (url: string, params: any): string =>
  `${url}?${new URLSearchParams(params).toString()}`;
