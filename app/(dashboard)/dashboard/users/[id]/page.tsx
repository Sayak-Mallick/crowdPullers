const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Showing details for #{id}</h1>
    </div>
  )
}

export default UserDetails