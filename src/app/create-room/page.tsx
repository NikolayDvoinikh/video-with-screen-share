import CreateRoomForm from "./create-room-form";

export default function CreateRoomPage() {
  return (
    <div className="container mx-auto py-12 flex flex-col gap-8">
      <h2 className="text-4xl font-bold">Create Room</h2>
      <CreateRoomForm />
    </div>
  );
}
