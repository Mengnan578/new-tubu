// 此页面为备用登陆页面，仅仅在用户使用url 登陆的时候才显示
const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        {children}
    </div>
  );
};

export default Layout