namespace Ships.Business.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.T_GAME",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstSideFK = c.Int(nullable: false),
                        SecondSideFK = c.Int(nullable: false),
                        NextMoveSideFK = c.Int(nullable: false),
                        WinnerSideFK = c.Int(),
                        CreatedAt = c.DateTime(nullable: false),
                        StartedAt = c.DateTime(),
                        EndedAt = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.T_GAME_SIDE", t => t.FirstSideFK)
                .ForeignKey("dbo.T_GAME_SIDE", t => t.NextMoveSideFK, cascadeDelete: true)
                .ForeignKey("dbo.T_GAME_SIDE", t => t.SecondSideFK)
                .ForeignKey("dbo.T_GAME_SIDE", t => t.WinnerSideFK)
                .Index(t => t.FirstSideFK)
                .Index(t => t.SecondSideFK)
                .Index(t => t.NextMoveSideFK)
                .Index(t => t.WinnerSideFK);
            
            CreateTable(
                "dbo.T_GAME_SIDE",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PlayerFK = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.PlayerFK, cascadeDelete: true)
                .Index(t => t.PlayerFK);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.T_SHIP",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        GameSideFK = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.T_GAME_SIDE", t => t.GameSideFK, cascadeDelete: true)
                .Index(t => t.GameSideFK);
            
            CreateTable(
                "dbo.T_POSITION",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ShipFK = c.Int(nullable: false),
                        X = c.Int(nullable: false),
                        Y = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.T_SHIP", t => t.ShipFK, cascadeDelete: true)
                .Index(t => t.ShipFK);
            
            CreateTable(
                "dbo.T_SHOT",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        GameSideFK = c.Int(nullable: false),
                        X = c.Int(nullable: false),
                        Y = c.Int(nullable: false),
                        DoneAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.T_GAME_SIDE", t => t.GameSideFK, cascadeDelete: true)
                .Index(t => t.GameSideFK);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.T_GAME", "WinnerSideFK", "dbo.T_GAME_SIDE");
            DropForeignKey("dbo.T_GAME", "SecondSideFK", "dbo.T_GAME_SIDE");
            DropForeignKey("dbo.T_GAME", "NextMoveSideFK", "dbo.T_GAME_SIDE");
            DropForeignKey("dbo.T_GAME", "FirstSideFK", "dbo.T_GAME_SIDE");
            DropForeignKey("dbo.T_SHOT", "GameSideFK", "dbo.T_GAME_SIDE");
            DropForeignKey("dbo.T_SHIP", "GameSideFK", "dbo.T_GAME_SIDE");
            DropForeignKey("dbo.T_POSITION", "ShipFK", "dbo.T_SHIP");
            DropForeignKey("dbo.T_GAME_SIDE", "PlayerFK", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.T_SHOT", new[] { "GameSideFK" });
            DropIndex("dbo.T_POSITION", new[] { "ShipFK" });
            DropIndex("dbo.T_SHIP", new[] { "GameSideFK" });
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.T_GAME_SIDE", new[] { "PlayerFK" });
            DropIndex("dbo.T_GAME", new[] { "WinnerSideFK" });
            DropIndex("dbo.T_GAME", new[] { "NextMoveSideFK" });
            DropIndex("dbo.T_GAME", new[] { "SecondSideFK" });
            DropIndex("dbo.T_GAME", new[] { "FirstSideFK" });
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.T_SHOT");
            DropTable("dbo.T_POSITION");
            DropTable("dbo.T_SHIP");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.T_GAME_SIDE");
            DropTable("dbo.T_GAME");
        }
    }
}
