import SceneIntro from "@/components/scenes/SceneIntro";
import SceneOne from "@/components/scenes/SceneOne";
import SceneAbout from "@/components/scenes/SceneAbout";
import SceneInteractive from "@/components/scenes/SceneInteractive";
import SceneOutro from "@/components/scenes/SceneOutro";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">

      <SceneIntro />
      <SceneOne />
      <SceneInteractive />
      <SceneAbout />
      <SceneOutro />

    </main>
  );
}
