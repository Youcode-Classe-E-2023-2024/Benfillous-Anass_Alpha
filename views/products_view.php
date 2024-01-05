<div id="products-container" class="hidden col-span-12 mt-5">
    <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
        <div class="bg-white p-4 shadow-lg rounded-lg">
            <div class="flex justify-between">
                <h1 class="font-bold text-base">Products</h1>
                <div id="product-add-btn" class="cursor-pointer w-auto h-auto">
                    <div class="flex-1 h-full">
                        <div class="flex items-center justify-center flex-1 h-full p-2 bg-blue-800 text-white shadow rounded-full">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto">
                        <div class="py-2 align-middle inline-block min-w-full">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                    <tr>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            <div class="flex cursor-pointer">
                                                <span class="mr-2">PRODUCT NAME</span>
                                            </div>
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            <div class="flex cursor-pointer">
                                                <span class="mr-2">Stock</span>
                                            </div>
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            <div class="flex cursor-pointer">
                                                <span class="mr-2">STATUS</span>
                                            </div>
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            <div class="flex cursor-pointer">
                                                <span class="mr-2">ACTION</span>
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody id="products-list-section" class="bg-white divide-y divide-gray-200">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>