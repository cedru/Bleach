//MCCScript 1.0

/* This is a sample script that will load a ChatBot into Minecraft Console Client
 * Simply execute the script once with /script or the script scheduler to load the bot */

MCC.LoadBot(new ExampleBot());

//MCCScript Extensions

/* The ChatBot class must be defined as an extension of the script in the Extensions section
 * The class can override common methods from ChatBot.cs, take a look at MCC's source code */

public class ExampleBot : ChatBot
{
	
    public override void Initialize()
    {
        LogToConsole("Moderation Added");
		
    }


    public override void GetText(string text)
    {
        string message = "";
        string username = "";
		string path = System.IO.Directory.GetCurrentDirectory() + "\\Moderation";
		string path2 = System.IO.Directory.GetCurrentDirectory() + "\\RaidAlerts";
		string path3 = System.IO.Directory.GetCurrentDirectory() + "\\Console";
		string[] users = File.ReadAllLines(@path3 + "\\whitelist.txt");
		string faction = "TrueReligion";//Name of The Faction who's Cfs you wish to Monitor. 



		if (IsChatMessage (text, ref message, ref username)) 
		{						
				if (text.Contains("§e#1 ") || text.Contains("§7#2 "))
				{
					message = text.Replace(',', '.');	
					File.AppendAllText(@path3 + "\\output.txt", GetVerbatim(message) + Environment.NewLine);
				}
				
		//------------------------------------------------------------------------------------------------------------------------------------		
				
				else if (text.Contains("§6#3 ") || text.Contains("§c#4 "))
				{
					message = text.Replace(',', '.');	
					File.AppendAllText(@path3 + "\\output.txt", GetVerbatim(message) + Environment.NewLine);
				}		
				
		//------------------------------------------------------------------------------------------------------------------------------------		
				
				else if (text.Contains("§c#5 ") || text.Contains("§c#6 "))
				{
					message = text.Replace(',', '.');	
					File.AppendAllText(@path3 + "\\output.txt", GetVerbatim(message) + Environment.NewLine);
				}

		//------------------------------------------------------------------------------------------------------------------------------------		
				
				else if (text.Contains("§c#7 ") || text.Contains("§c#8 "))
				{
					message = text.Replace(',', '.');	
					File.AppendAllText(@path3 + "\\output.txt", GetVerbatim(message) + Environment.NewLine);
				}
		
		//------------------------------------------------------------------------------------------------------------------------------------		
				
				else if (text.Contains("§c#9 ") || text.Contains("§c#10 "))
				{
					message = text.Replace(',', '.');	
					File.AppendAllText(@path3 + "\\output.txt", GetVerbatim(message) + Environment.NewLine);
				}
		//------------------------------------------------------------------------------------------------------------------------------------		

		}
		
    }
}