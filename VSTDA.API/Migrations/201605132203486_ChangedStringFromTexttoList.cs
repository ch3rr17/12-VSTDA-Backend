namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedStringFromTexttoList : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ToDoEntries", "List", c => c.String());
            DropColumn("dbo.ToDoEntries", "Text");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ToDoEntries", "Text", c => c.String());
            DropColumn("dbo.ToDoEntries", "List");
        }
    }
}
