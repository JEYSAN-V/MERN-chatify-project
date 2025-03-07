import PropTypes from "prop-types";
import { X } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img
                src={"/vite.svg"}
                alt={"Guest"}
              />
            </div>
          </div>
          <div>
            <h3 className="font-medium">{"Guest"}</h3>
            <p className="text-sm text-base-content/70">
              {"Offline"}
            </p>
          </div>
        </div>

        <button>
          <X />
        </button>
      </div>
    </div>
  );
};

// ✅ Define PropTypes
ChatHeader.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    profilePic: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
  onClose: PropTypes.func,
};

// ✅ Default Props (Ensures `user` is never undefined)
ChatHeader.defaultProps = {
  user: { fullName: "Guest", profilePic: "/avatar.png", isOnline: false },
  onClose: () => {},
};

export default ChatHeader;
