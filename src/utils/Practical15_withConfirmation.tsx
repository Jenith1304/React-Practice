// function UserList({ confirmAction }: InjectedProps) {
//   function deleteUser(id: number) {
//     confirmAction(() => {
//       console.log("Deleting user:", id);
//     });
//   }

import { useState } from "react";
import { createPortal } from "react-dom";

type InjectedProps = {
    confirmAction: (action: () => void) => void;
};
const withActionConfirmation = (WrappedComponent: React.ComponentType<InjectedProps>) => {
    return (props: InjectedProps) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [pendingAction, setPendingAction] = useState<(() => void) | null>(
            null
        );
        const confirmAction = (action: () => void) => {
            setPendingAction(() => action);
            setIsModalOpen(true);
        }

        return (
            <>
                <WrappedComponent {...props} confirmAction={confirmAction} />
                {isModalOpen && createPortal(
                    <div className="modal">
                        <p>Are you sure you want to perform this action?</p>
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                        <button onClick={() => {
                            if (pendingAction) {
                                pendingAction();
                            }
                            setIsModalOpen(false);
                        }}> Ok</button >
                    </div >, document.body
                )}
            </>
        )
    }
}
function UserList({ confirmAction }: InjectedProps) {
    function deleteUser(id: number) {
        confirmAction(() => {
            console.log("Deleting user:", id);
        });
    }

    return (
        <button onClick={() => deleteUser(1)}>
            Delete
        </button>
    );
}

export const UserListWithConfirmation = withActionConfirmation(UserList);