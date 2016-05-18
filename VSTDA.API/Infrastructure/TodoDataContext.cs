using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using VSTDA.API.Models;

namespace VSTDA.API.Infrastructure
{
    //creates class that inherits from DBContext
    public class TodoDataContext : DbContext
    {
        //setup constructor
        public TodoDataContext() : base("ToDo")
        {

        }

        //describe our tables
        public IDbSet<ToDoEntry> ToDoEntries { get; set; }
    }
}