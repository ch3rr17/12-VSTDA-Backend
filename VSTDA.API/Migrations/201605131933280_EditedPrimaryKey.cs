namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class EditedPrimaryKey : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ToDoEntries",
                c => new
                    {
                        ToDoEntryId = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        Priority = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ToDoEntryId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ToDoEntries");
        }
    }
}
