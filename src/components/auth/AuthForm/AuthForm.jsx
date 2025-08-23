
export function AuthForm({onSubmit,children}){

    function handleSubmit(event){
        event.preventDefault();
        onSubmit()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>{children}</form>
        </>
    )
}