import { auth } from "@/auth";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ProfileCard } from "@/modules/profile/components/profile-card";

export const ProfileForm = async () => {
  const session = await auth();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Perfil"
          description={`Bienvenido, ${session?.user?.name}!!`}
        />
      </div>
      <Separator />
      <ProfileCard patientId={session?.user?.id as string} />
    </>
  );
};
