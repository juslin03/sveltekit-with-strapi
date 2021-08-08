import type { EndpointOutput } from '@sveltejs/kit';
import { BASE_URL } from '$lib/constants';
export async function get(): Promise<EndpointOutput> {
    const res = await fetch(`${BASE_URL}/posts`);
    const data = await res.json();
    return { body: data }
}