type GetAddressParams = {
  latitude: number;
  longitude: number;
};

type AddressResponse = {
  city: string;
  countryName: string;
  principalSubdivision: string; // state or province
  postcode: string;
  locality: string; // often the same as city
};

export async function getAddress({
  latitude,
  longitude,
}: GetAddressParams): Promise<AddressResponse> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
