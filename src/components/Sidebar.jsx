import PropTypes from "prop-types";
import { Users } from "lucide-react";

const Sidebar = ({ contacts = [], onSelectUser }) => {
  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      {/* Header */}
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>

      {/* Contact List */}
      <div className="overflow-y-auto w-full py-3">
        {contacts.length > 0 ? (
          contacts.map((contact, idx) => (
            <button
              key={idx}
              className="w-full p-3 flex items-center gap-3 hover:bg-base-200"
              onClick={() => onSelectUser(contact)}
            >
              {/* Avatar */}
              <div className="relative mx-auto lg:mx-0">
                <img
                  src={contact.profilePic || "/default-avatar.png"}
                  alt={contact.fullName}
                  className="size-12 rounded-full border"
                />
              </div>

              {/* User info */}
              <div className="hidden lg:block text-left min-w-0 flex-1">
                <p className="font-medium truncate">{contact.fullName}</p>
                <p className="text-sm text-base-content/70">
                  {contact.isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </button>
          ))
        ) : (
          <p className="text-center text-gray-500 p-4">No contacts available</p>
        )}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      profilePic: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
  onSelectUser: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  contacts: [],
};

export default Sidebar;
