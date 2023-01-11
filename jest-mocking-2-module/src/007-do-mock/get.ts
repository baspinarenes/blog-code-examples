import axios from "axios";

export default async function get(apiUrl: string): Promise<any> {
  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    return null;
  }
}
