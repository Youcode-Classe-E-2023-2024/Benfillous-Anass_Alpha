<div id="product-form-container" class="hidden min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
        <div>
            <h2 class="font-semibold text-xl text-gray-600">Product Form</h2>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600">
                        <p class="font-medium text-lg">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                    </div>

                    <div class="lg:col-span-2" id="product-forms-container">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 product-form">
                            <div class="md:col-span-3">
                                <label for="title">Title</label>
                                <input type="text" name="title" class="text-black h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter The Title" value="" />
                            </div>

                            <div class="md:col-span-2">
                                <label for="description">Description</label>
                                <input type="text" name="description" class="text-black h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Write a Description" />
                            </div>
                        </div>

                        <div class="md:col-span-5 text-right mt-4">
                            <div class="inline-flex items-end">
                                <button id="add-product-btn" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Another</button>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 text-right">
                        <div class="inline-flex items-end">
                            <button id="product-submit-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
