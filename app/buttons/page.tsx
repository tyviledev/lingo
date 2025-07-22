import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-2xl">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline">secondary Outline</Button>
      <Button variant="danger">danger</Button>
      <Button variant="dangerOutline">danger Outline</Button>
      <Button variant="super">super</Button>
      <Button variant="superOutline">super Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
};

export default ButtonsPage;
