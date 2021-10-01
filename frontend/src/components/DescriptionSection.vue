<template>
    <div class="ct-w-96 ct-ml-auto">
        <div class="ct-bg-green-500 ct-text-white ct-p-4 ct-flex ct-items-center ct-justify-between">
            <div class="ct-flex">
                <h4 class="ct-mr-2 ct-font-bold">Description</h4>
                <h6 class="ct-font-light">#Contribution-Tracker</h6>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="ct-w-5 ct-cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <div class="ct-px-4 ct-py-7">
            <div>
                <div class="ct-flex ct-text-base">
                    <h4 class="ct-font-semibold ct-mr-2.5">CreateTeamListView1</h4>
                    <span class="ct-text-gray-400">#200</span>
                </div>
                <div class="ct-text-gray-400 ct-text-sm ct-flex">
                    <p class="ct-mr-2">John Doe added this ticket 2 hours ago</p>
                    <!-- Insert dot here  -->
                    <p>3 votes</p>
                </div>
            </div>
            <div class="ct-mt-5">
                <h4 class="ct-font-semibold">Description</h4>
                <p class="ct-mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae tempore quis sunt corrupti. Perspiciatis, consectetur officiis! Perferendis molestiae dolorem sequi vitae aspernatur fugit commodi.</p>
            </div>
            <div class="ct-mt-8">
                <div>
                    <span>Commit Link:</span>
                    <span class="ct-text-green-500">http://zurichats/api/v1/deals</span>
                </div>
                <div class="ct-mt-4">
                    <span>Test Link:</span>
                    <span class="ct-text-green-500">http://zurichats/api/v1/deals</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'description'
}
</script>