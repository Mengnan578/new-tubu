import { useIsMobile } from "@/hooks/use-mobile";

import { Dialog,DialogContent,DialogHeader,DialogTitle } from "@/components/ui/dialog";
import { Drawer,DrawerContent,DrawerHeader,DrawerTitle } from "@/components/ui/drawer";

interface ResponsiveDialogProps {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveDialog = (props: ResponsiveDialogProps) => {
  const { children, open, title, onOpenChange } = props;
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

