import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Almond Kernal",
    href: "#",
    price: "₹3500",
    quantity: 1,
    imageSrc:
      "https://5.imimg.com/data5/BE/VW/JA/SELLER-13487080/almond-kernels.jpg",
    imageAlt: "Almond Kernal",
  },
  {
    id: 2,
    name: "Cashew Kernal",
    href: "#",
    price: "₹1900",
    quantity: 1,
    imageSrc:
      "https://www.debon.co.in/cdn/shop/products/cashews.png?v=1672122796",
    imageAlt: "Cashew Kernal",
  },
];
const addresses = [
  {
    name: "Ravi Gupta",
    mobileNumber: 9865435684,
    email: "ravigupta@gmail.com",
    streetAddress: "A-5/9 , 1st Floor ,Aadarsh Nagar",
    city: "Delhi",
    postalCode: 110008,
    country: "India",
  },
  {
    name: "Rakesh sharma",
    mobileNumber: 9936528421,
    email: "sharmarakesh@hotmail.com",
    streetAddress: "G-25 , Kamala Nagar",
    city: "Kolkata",
    postalCode: 560034,
    country: "India",
  },
];
function Checkout() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form className="bg-white px-5 py-12 mt-12 ">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="mobile-number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mobile Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="mobile-number"
                        id="mobile-number"
                        autoComplete="mobile-number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-black px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Add Address  
                  </button>
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-black hover:text-indigo-500"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Address
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Saved Addresses
                </p>

                <ul role="list">
                  {addresses.map((address) => (
                    <li
                      key={address.mobileNumber}
                      className="flex justify-between gap-x-6 py-5 px-5 border-solid border-2 border-gray-200 "
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <input
                          id="Address"
                          name="Saved-addresses"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {address.name}
                          </p>
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            Mobile Number : {address.mobileNumber}
                          </p>
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            Email : {address.email}
                          </p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">
                          Address : {address.streetAddress}
                        </p>
                        <p className="text-sm leading-6 text-gray-900">
                          {address.city} , {address.country} ,{" "}
                          {address.postalCode}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Payment Methods
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Which method would you like to use for payment ?
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="Pay-card"
                          name="payment-method"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="Pay-card"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Card
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="Pay-cash"
                          name="payment-method"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="Pay-cash"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Cash on delivery
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:col-span-2">
          <div className="mx-auto mt-12 bg-white max-w-7xl px=0 py-6 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight my-12  text-gray-900">
              Cart
            </h1>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty
                            </label>
                            <select>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-black hover:text-red-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>₹262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Continue
                </a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <Link to="/">
                    <button
                      type="button"
                      className="font-medium text-black hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;