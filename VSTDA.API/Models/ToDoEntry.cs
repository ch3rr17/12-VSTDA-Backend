using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.API.Models
{
    public class ToDoEntry
    {
        //Primary Key
        public int ToDoEntryId { get; set; }

        //Foreign Key - optional

        //User Data
        public string List { get; set; }
        public int Priority { get; set; }
    }
}