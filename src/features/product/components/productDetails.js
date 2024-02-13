import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductByIdAsync, selectProductById } from "../productSlice";
import { useParams } from "react-router-dom";

const quantity = [
  {
    name: "250 GM",
    inStock: false,
  },
  {
    name: "250 GM(Pack of 2)",
    inStock: false,
  },
  {
    name: "250 GM(Pack of 3)",
    inStock: true,
  },
  {
    name: "250 GM(Pack of 4)",
    inStock: true,
  },
  {
    name: "500 GM",
    inStock: true,
  },
  {
    name: "500 GM(Pack of 2)",
    inStock: false,
  },
  {
    name: "500 GM(Pack of 3)",
    inStock: true,
  },
  {
    name: "500 GM(Pack of 4)",
    inStock: false,
  },
  {
    name: "750 GM",
    inStock: false,
  },
  {
    name: "1 KG",
    inStock: true,
  },
  {
    name: "1 KG(Pack of 2)",
    inStock: true,
  },
  {
    name: "1 KG(Pack of 4)",
    inStock: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState(quantity[2]);
  const products = useSelector(selectProductById);
  // console.log(product)
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchAllProductByIdAsync(params.id));
  }, [dispatch, params.id]);
  // console.log(params.id)

  
  return (
    <div className="bg-white">
      {products && products.map((product) => (
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {product.breadcrumbs &&
                product.breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center">
                      <a className="mr-2 text-sm font-medium text-gray-900">
                        {breadcrumb.name}
                      </a>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
                ))}
              <li className="text-sm">
                <a
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              {product.images[0] && (
                <img
                  src={product.images[0].src}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              )}
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {product.images[1] && (
                <img
                  src={product.images[1].src}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              )}
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {product.images[2] && (
                <img
                  src={product.images[2].src}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              )}
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            {product.images[3] && (
                <img
                  src={product.images[3].src}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ₹{product.price}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>

              <form className="mt-10">
                {/* Quantity */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      Quantity
                    </h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a Quantity
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {quantity.map((quantity) => (
                        <RadioGroup.Option
                          key={quantity.name}
                          value={quantity}
                          disabled={!quantity.inStock}
                          className={({ active }) =>
                            classNames(
                              quantity.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {quantity.name}
                              </RadioGroup.Label>
                              {quantity.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Benefits</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.benefits && product.benefits.map((benefit) => (
                      <li key={benefit} className="text-gray-400">
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">About</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.about}</p>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Storage Conditions
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {product.storageCondition}
                  </p>
                </div>
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Shelf Life
                  </h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.shelfLife}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
