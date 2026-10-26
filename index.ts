
import concurrently from "concurrently";

concurrently([
    {
        name: "server",
        command: "python manage.py runserver",
        cwd: "cd packages/server",
        prefixColor: "blue",
    },

     {
        name: "client",
        command: "npm run dev",
        cwd: "cd packages/client",
        prefixColor: "green",
    }
])