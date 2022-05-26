/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = () => {
	const [open, setOpen] = useState(true);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
								<div>
									<div className="mt-3 text-center sm:mt-5">
										<Dialog.Title
											as="h3"
											className="text-lg leading-6 font-medium text-gray-900"
										>
											Payment successful
										</Dialog.Title>
										<div className="mt-2">
											<div className="flex items-center justify-center w-full h-full">
												<div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
													<div className="px-4 py-5 sm:p-6">
														<p className="text-xl font-bold text-gray-900">
															Add New User
														</p>
														<p className="mt-3 text-sm font-medium text-gray-500">
															Lorem ipsum dolor
															sit amet, consec
															tetur adipiscing
															elit.
														</p>

														<form
															action="#"
															method="POST"
															className="mt-6"
														>
															<div className="space-y-4">
																<div>
																	<label
																		for=""
																		className="text-sm font-bold text-gray-900"
																	>
																		{" "}
																		Name{" "}
																	</label>
																	<div className="mt-2">
																		<input
																			type="text"
																			name=""
																			id=""
																			placeholder="John Doe"
																			value=""
																			className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
																		/>
																	</div>
																</div>

																<div>
																	<label
																		for=""
																		className="text-sm font-bold text-gray-900"
																	>
																		{" "}
																		Email{" "}
																	</label>
																	<div className="mt-2">
																		<input
																			type="text"
																			name=""
																			id=""
																			placeholder="email@example.com"
																			value=""
																			className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
																		/>
																	</div>
																</div>

																<div>
																	<label
																		for=""
																		className="text-sm font-bold text-gray-900"
																	>
																		{" "}
																		User
																		Role{" "}
																	</label>
																	<div className="mt-2">
																		<select className="block w-full py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
																			<option>
																				Editor
																			</option>
																		</select>
																	</div>
																</div>
															</div>

															<div className="flex items-center justify-end mt-5 space-x-4">
																<button
																	type="reset"
																	className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
																>
																	Cancel
																</button>

																<button
																	type="submit"
																	className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
																>
																	Add
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <div className="mt-5 sm:mt-6">
									<button
										type="button"
										className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
										onClick={() => setOpen(false)}
									>
										Go back to dashboard
									</button>
								</div> */}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Modal;
