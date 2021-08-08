<script lang="ts">
    import '../app.postcss';
    import userStore from '$lib/user';
    import type { User } from '$lib/types/index';
    import { onMount } from 'svelte';
    import { BASE_URL } from '$lib/constants';
    import Navbar from '$lib/Components/Navbar.svelte';

    let loading = true;
    onMount(async () => {
        if(!localStorage.getItem('token')) {
            loading = false;
            return { props: { user: null } }
        }
        const res = await fetch(`${BASE_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        const user: User = await res.json();
        loading = false;
        if(res.ok) $userStore = user;
    })
</script>

<Navbar />
{#if !loading}
    <slot />
{/if}