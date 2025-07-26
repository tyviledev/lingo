type Props = {
  children: React.ReactNode;
};

export const StickyWrapper = ({ children }: Props) => {
  return (
    <div className="hidden lg:block w-96 sticky self-end bottom-6 bg-red-100">
      <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-6">
        {children}
      </div>
    </div>
  );
};
