<!--<template>-->
<!--  <div id="app">-->
<!--    &lt;!&ndash;Header&ndash;&gt;-->
<!--    <div class="w-full m-0 p-0 bg-cover bg-bottom relative w-full h-96">-->
<!--      <div class="absolute top-0 left-0 right-0 bottom-0 z-1 overflow-hidden">-->
<!--        <img :src="img.cover" alt="cover" class="object-cover w-full h-full">-->
<!--      </div>-->
<!--      <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal relative z-10">-->
<!--        &lt;!&ndash;Title&ndash;&gt;-->
<!--        <p class="text-white font-extrabold text-3xl md:text-5xl">-->
<!--          👻 HS-H2-->
<!--        </p>-->
<!--        <p class="text-xl md:text-2xl text-gray-300">Welcome to my web</p>-->
<!--        &lt;!&ndash;Nav&ndash;&gt;-->
<!--        <nav class="mt-0 w-full">-->
<!--          <div class="container mx-auto flex items-center">-->

<!--            <div class="flex w-1/2 pl-4 text-sm">-->
<!--              <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">-->
<!--                <li class="mr-2">-->
<!--                  <a class="inline-block py-2 px-2 text-gray-800 no-underline hover:text-blue-500 hover:underline"-->
<!--                     href="">POST</a>-->
<!--                </li>-->
<!--                <li class="mr-2">-->
<!--                  <a class="inline-block text-gray-800 no-underline hover:text-blue-500 hover:underline py-2 px-2"-->
<!--                     href="#">LINK</a>-->
<!--                </li>-->
<!--                <li class="mr-2">-->
<!--                  <a class="inline-block text-gray-800 no-underline hover:text-blue-500 hover:underline py-2 px-2"-->
<!--                     href="#">LINK</a>-->
<!--                </li>-->
<!--                <li class="mr-2">-->
<!--                  <a class="inline-block text-gray-800 no-underline hover:text-blue-500 hover:underline py-2 px-2"-->
<!--                     href="">POST_VUE</a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->


<!--            <div class="flex w-1/2 justify-end content-center">-->
<!--              <a class="inline-block text-gray-800 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"-->
<!--                 data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">-->
<!--                <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">-->
<!--                  <path-->
<!--                      d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>-->
<!--                </svg>-->
<!--              </a>-->
<!--              <a class="inline-block text-gray-800 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"-->
<!--                 data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">-->
<!--                <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">-->
<!--                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>-->
<!--                </svg>-->
<!--              </a>-->
<!--            </div>-->

<!--          </div>-->
<!--        </nav>-->
<!--      </div>-->

<!--    </div>-->

<!--    &lt;!&ndash;Container&ndash;&gt;-->
<!--    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32 relative z-10">-->

<!--      <div class="mx-0 sm:mx-6">-->
<!--        <div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t p-8">-->

<!--          &lt;!&ndash;Lead Card&ndash;&gt;-->
<!--          <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">-->
<!--            <a href="post.html" class="flex flex-wrap no-underline hover:no-underline">-->
<!--              <div class="w-full md:w-2/3 rounded-t">-->
<!--                <img :src="img.safe" class="h-full w-full shadow">-->
<!--              </div>-->

<!--              <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">-->
<!--                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">-->
<!--                  <p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>-->
<!--                  <div class="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow My web b2c</div>-->
<!--                  <p class="text-gray-800 font-serif text-base px-6 mb-5">-->
<!--                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatibus.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->

<!--            </a>-->
<!--          </div>-->
<!--          &lt;!&ndash;/Lead Card&ndash;&gt;-->

<!--          &lt;!&ndash;Posts Container&ndash;&gt;-->
<!--          <div class=" flex-wrap justify-between mx-6">-->

<!--            <div>-->
<!--              <div class="text-2xl font-bold py-8">Sản phẩm hàng đầu</div>-->
<!--              <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">-->
<!--                &lt;!&ndash;1/3 col &ndash;&gt;-->
<!--                <div class="flex flex-col flex-grow flex-shrink"-->
<!--                     v-for="( productViewItem,productViewIndex ) in topViewProducts"-->
<!--                     :key="productViewIndex">-->
<!--                  <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">-->
<!--                    <a href="#" class="flex flex-wrap no-underline hover:no-underline">-->
<!--                      <img :src="productViewItem.image.full_image_path" class="h-full w-full rounded-t pb-6">-->
<!--                      <div class="w-full font-bold text-xl text-gray-900 px-6">{{ productViewItem.name }}</div>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                  <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">-->
<!--                    <div class="grid grid-cols-3 gap-2">-->

<!--                      <span class="text-red-600 text-sm ">{{ productViewItem.price }} vnd</span>-->
<!--                      <span class="text-gray-400 text-sm ">view: {{ productViewItem.views }}</span>-->

<!--                      <span class="text-sm">quantity: {{ productViewItem.quantity }}</span>-->
<!--                      <span class="text-sm">sold: {{ productViewItem.sold }}</span>-->
<!--                      <span></span>-->
<!--                      <button class="flex justify-center items-center bg-blue-300 rounded-lg">-->
<!--                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"-->
<!--                             class="bi bi-cart" viewBox="0 0 16 16">-->
<!--                          <path-->
<!--                              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>-->
<!--                        </svg>-->
<!--                      </button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div>-->
<!--              <div class="text-2xl font-bold py-8">Sản phẩm bán chạy</div>-->
<!--              <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">-->
<!--                &lt;!&ndash;1/3 col &ndash;&gt;-->
<!--                <div class="flex flex-col flex-grow flex-shrink" v-for="( productSoldItem,productSoldIndex ) in topSoldProducts"-->
<!--                     :key="productSoldIndex">-->
<!--                  <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">-->
<!--                    <a href="#" class="flex flex-wrap no-underline hover:no-underline">-->
<!--                      <img :src="productSoldItem.image.full_image_path" class="h-full w-full rounded-t pb-6">-->
<!--                      <div class="w-full font-bold text-xl text-gray-900 px-6">{{ productSoldItem.name }}</div>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                  <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">-->
<!--                    <div class="grid grid-cols-3 gap-2">-->

<!--                      <span class="text-red-600 text-sm ">{{ productSoldItem.price }} vnd</span>-->
<!--                      <span class="text-gray-400 text-sm ">view: {{ productSoldItem.views }}</span>-->

<!--                      <span class="text-sm">quantity: {{ productSoldItem.quantity }}</span>-->
<!--                      <span class="text-sm">sold: {{ productSoldItem.sold }}</span>-->
<!--                      <span></span>-->
<!--                      <button class="flex justify-center items-center bg-blue-300 rounded-lg">-->
<!--                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"-->
<!--                             class="bi bi-cart" viewBox="0 0 16 16">-->
<!--                          <path-->
<!--                              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>-->
<!--                        </svg>-->
<!--                      </button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div>-->
<!--              <div class="text-2xl font-bold py-8">Danh sách sản phẩm</div>-->
<!--              <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">-->
<!--                &lt;!&ndash;1/3 col &ndash;&gt;-->
<!--                <div class="flex flex-col flex-grow flex-shrink" v-for="( productItem,productIndex ) in lastProducts"-->
<!--                     :key="productIndex">-->
<!--                  <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">-->
<!--                    <a href="#" class="flex flex-wrap no-underline hover:no-underline">-->
<!--                      <img :src="productItem.image.full_image_path" class="h-full w-full rounded-t pb-6">-->
<!--                      <div class="w-full font-bold text-xl text-gray-900 px-6">{{ productItem.name }}</div>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                  <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">-->
<!--                    <div class="grid grid-cols-3 gap-2">-->

<!--                      <span class="text-red-600 text-sm ">{{ productItem.price }} vnd</span>-->
<!--                      <span class="text-gray-400 text-sm ">view: {{ productItem.views }}</span>-->

<!--                      <span class="text-sm">quantity: {{ productItem.quantity }}</span>-->
<!--                      <span class="text-sm">sold: {{ productItem.sold }}</span>-->
<!--                      <span></span>-->
<!--                      <button class="flex justify-center items-center bg-blue-300 rounded-lg">-->
<!--                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"-->
<!--                             class="bi bi-cart" viewBox="0 0 16 16">-->
<!--                          <path-->
<!--                              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>-->
<!--                        </svg>-->
<!--                      </button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
<!--      </div>-->


<!--    </div>-->


<!--    <footer class="text-center lg:text-left bg-gray-100 text-gray-600">-->
<!--      <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">-->
<!--        <div class="mr-12 hidden lg:block">-->
<!--          <span>Get connected with us on social networks:</span>-->
<!--        </div>-->
<!--        <div class="flex justify-center">-->
<!--          <a href="#!" class="mr-6 text-gray-600">-->
<!--            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"-->
<!--                 class="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"-->
<!--                 viewBox="0 0 320 512">-->
<!--              <path fill="currentColor"-->
<!--                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">-->
<!--              </path>-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a href="#!" class="mr-6 text-gray-600">-->
<!--            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"-->
<!--                 class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">-->
<!--              <path fill="currentColor"-->
<!--                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">-->
<!--              </path>-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a href="#!" class="mr-6 text-gray-600">-->
<!--            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"-->
<!--                 class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">-->
<!--              <path fill="currentColor"-->
<!--                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">-->
<!--              </path>-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a href="#!" class="mr-6 text-gray-600">-->
<!--            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"-->
<!--                 class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">-->
<!--              <path fill="currentColor"-->
<!--                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">-->
<!--              </path>-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a href="#!" class="mr-6 text-gray-600">-->
<!--            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"-->
<!--                 class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"-->
<!--                 viewBox="0 0 448 512">-->
<!--              <path fill="currentColor"-->
<!--                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">-->
<!--              </path>-->
<!--            </svg>-->
<!--          </a>-->
<!--          <a href="#!" class="text-gray-600">-->
<!--            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"-->
<!--                 class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">-->
<!--              <path fill="currentColor"-->
<!--                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">-->
<!--              </path>-->
<!--            </svg>-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mx-6 py-10 text-center md:text-left">-->
<!--        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">-->
<!--          <div class="">-->
<!--            <h6 class="-->
<!--            uppercase-->
<!--            font-semibold-->
<!--            mb-4-->
<!--            flex-->
<!--            items-center-->
<!--            justify-center-->
<!--            md:justify-start-->
<!--          ">-->
<!--              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"-->
<!--                   class="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"-->
<!--                   viewBox="0 0 512 512">-->
<!--                <path fill="currentColor"-->
<!--                      d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">-->
<!--                </path>-->
<!--              </svg>-->
<!--              Tailwind ELEMENTS-->
<!--            </h6>-->
<!--            <p>-->
<!--              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor-->
<!--              sit amet, consectetur adipisicing elit.-->
<!--            </p>-->
<!--          </div>-->
<!--          <div class="">-->
<!--            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">-->
<!--              Products-->
<!--            </h6>-->
<!--            <p class="mb-4">-->
<!--              <a href="#!" class="text-gray-600">Angular</a>-->
<!--            </p>-->
<!--            <p class="mb-4">-->
<!--              <a href="#!" class="text-gray-600">React</a>-->
<!--            </p>-->
<!--            <p class="mb-4">-->
<!--              <a href="#!" class="text-gray-600">Vue</a>-->
<!--            </p>-->
<!--            <p>-->
<!--              <a href="#!" class="text-gray-600">Laravel</a>-->
<!--            </p>-->
<!--          </div>-->
<!--          <div class="">-->
<!--            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">-->
<!--              Useful links-->
<!--            </h6>-->
<!--            <p class="mb-4">-->
<!--              <a href="#!" class="text-gray-600">Pricing</a>-->
<!--            </p>-->
<!--            <p class="mb-4">-->
<!--              <a href="#!" class="text-gray-600">Settings</a>-->
<!--            </p>-->
<!--            <p class="mb-4">-->
<!--              <a href="#!" class="text-gray-600">Orders</a>-->
<!--            </p>-->
<!--            <p>-->
<!--              <a href="#!" class="text-gray-600">Help</a>-->
<!--            </p>-->
<!--          </div>-->
<!--          <div class="">-->
<!--            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">-->
<!--              Contact-->
<!--            </h6>-->
<!--            <p class="flex items-center justify-center md:justify-start mb-4">-->
<!--              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"-->
<!--                   class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">-->
<!--                <path fill="currentColor"-->
<!--                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">-->
<!--                </path>-->
<!--              </svg>-->
<!--              New York, NY 10012, US-->
<!--            </p>-->
<!--            <p class="flex items-center justify-center md:justify-start mb-4">-->
<!--              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"-->
<!--                   class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"-->
<!--                   viewBox="0 0 512 512">-->
<!--                <path fill="currentColor"-->
<!--                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">-->
<!--                </path>-->
<!--              </svg>-->
<!--              info@example.com-->
<!--            </p>-->
<!--            <p class="flex items-center justify-center md:justify-start mb-4">-->
<!--              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"-->
<!--                   class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"-->
<!--                   viewBox="0 0 512 512">-->
<!--                <path fill="currentColor"-->
<!--                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">-->
<!--                </path>-->
<!--              </svg>-->
<!--              + 01 234 567 88-->
<!--            </p>-->
<!--            <p class="flex items-center justify-center md:justify-start">-->
<!--              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"-->
<!--                   class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"-->
<!--                   viewBox="0 0 512 512">-->
<!--                <path fill="currentColor"-->
<!--                      d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">-->
<!--                </path>-->
<!--              </svg>-->
<!--              + 01 234 567 89-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="text-center p-6 bg-gray-200">-->
<!--        <span>© 2021 Copyright:</span>-->
<!--        <a class="text-gray-600 font-semibold" href="https://tailwind-elements.com/">Tailwind Elements</a>-->
<!--      </div>-->
<!--    </footer>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div>
    <ProductDetail></ProductDetail>
  </div>
</template>
<script>
import ProductDetail from "@/components/ProductDetail";
export default {
  name: "App",
  components: {ProductDetail},
  data() {
    return {
      img: {
        cover: require('./assets/images/cover.jpg'),
        safe: require('./assets/images/safe.jpg'),
      },
      lastProducts: [],
      topViewProducts: [],
      topSoldProducts: [],
    }
  },
  methods: {
    getApiHome() {
      const url = 'http://192.168.1.30:8000/api/v1/home';
      fetch(url).then(responsive => responsive.json())
          .then(data => {
            this.lastProducts = data.lastProducts;
            this.topViewProducts = data.topViewProducts;
            this.topSoldProducts = data.topSoldProducts;
            console.log(data.topViewProducts);
          }).catch(error => console.log(error));
      console.log(this.topViewProducts);
    }
  },
  mounted() {
    this.getApiHome();
  },
};
</script>

<style></style>