import { useQuery } from "@tanstack/react-query";
const fetchProducts = async () => {
    const response = await fetch('http://localhost:4000/users')
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    console.log(data);

    return data;

}
const AllUsers = () => {
    const { isLoading, error, data: users } = useQuery({ queryKey: ['data'], queryFn: fetchProducts })
    if (isLoading) {
        return <h1>Loadingg.............</h1>
    }

    if (error) {
        return <h2>Error: {error}</h2>
    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                <thead>
                    <tr className="bg-[#0095FF] text-white">
                        <th className="py-4 px-6 text-lg text-left border-b">User Image</th>
                        <th className="py-4 px-6 text-lg text-left border-b">Name</th>
                        <th className="py-4 px-6 text-lg text-left border-b">Role</th>
                        <th className="py-4 px-6 text-lg border-b text-end">Update Role</th>
                        <th className="py-4 px-6 text-lg border-b text-end">Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) =>
                            <>
                                <tr key={user._id} className="hover:bg-gray-50 border-b transition duration-300">
                                    <td className="py-4 px-4 flex justify-start">
                                        <img src={user.image} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                    </td>
                                    <td className="py-4 px-6 border-b text-xl font-medium">{user.name}</td>
                                    <td className="py-4 px-6 border-b text-lg font-medium">{user.role}</td>
                                    <td className="py-4 px-6 border-b text-end">
                                        <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Update</button>
                                    </td>
                                    <td className="py-4 px-6 border-b text-end">
                                        <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers