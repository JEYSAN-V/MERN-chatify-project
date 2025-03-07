import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (showLogoutModal) {
      setTimeout(() => {
        setModalAnimation(true);
      }, 10);
    } else {
      setModalAnimation(false);
    }
  }, [showLogoutModal]);

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    setShowLogoutModal(false);
    navigate("/login");
  };

  // Paths where we should hide the "Profile" & "Logout" buttons
  const hideAuthButtons = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      <header
        className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40
          backdrop-blur-lg bg-base-100/80"
      >
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <Link
                to="/home"
                className="flex items-center gap-2.5 hover:opacity-80 transition-all"
              >
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare />
                </div>
                <h1 className="text-lg font-bold">CHATIFY</h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link to="/settings" className="btn btn-sm gap-2 transition-colors">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </Link>

              {/* Hide Profile & Logout buttons on Login/Signup pages */}
              {!hideAuthButtons && (
                <>
                  <Link to="/profile" className="btn btn-sm gap-2">
                    <User className="size-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>

                  <button
                    className="btn btn-sm gap-2"
                    onClick={() => setShowLogoutModal(true)}
                  >
                    <LogOut className="size-5" />
                    <span className="hidden sm:inline">Log out</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Custom Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`bg-base-100 rounded-lg shadow-lg p-6 w-80 transform transition-all duration-300 ease-out ${
              modalAnimation ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <h3 className="text-lg font-bold mb-4">Confirm Logout</h3>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-4">
              <button
                className="btn btn-sm"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={handleLogout}
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
