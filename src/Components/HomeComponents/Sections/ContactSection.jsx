const ContactSection = () => {
    return (
        <div className="grid desktop:grid-cols-2 desktop:mx-60 laptopL:grid-cols-2 laptopL:mx-5 lg:grid-cols-2 lg:gap-5 md:grid-cols-2 md:gap-4 mobileL:space-y-4 mobileM:space-y-4 mobileS:space-y-4">
            <div className="flex flex-col">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&apos;s talk!</h2>
                    <div className="dark:text-gray-600">Fill out the form to contact us.</div>
                </div>
                <img src="https://i.ibb.co.com/5rtnbDX/workplace-business-modern-male-accessories-laptop-black-background-155003-3944.jpg" alt="" className="p-6 h-52 md:h-64 object-contain" />
            </div>
            <form noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-500 text-white">Send Message</button>
            </form>
        </div>
    )
}

export default ContactSection