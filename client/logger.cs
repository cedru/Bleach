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
		
		LogToConsole("Logger added");
		int time = 30000; //How Long The Bot Runs For (30 Seconds) - Dependent on how many factions being monitered. - Cannot take More than 5 - increase for more time (30/5, with some extra wiggle for lag)
		string path = System.IO.Directory.GetCurrentDirectory() + "\\Factions";
		string path2 = System.IO.Directory.GetCurrentDirectory() + "\\Console";
		string[] factions = File.ReadAllLines(@path + "\\factions.txt");
				File.AppendAllText(@path + "\\announce.txt", "Logger is currently running please do not run commands for " + ((time/1000) + 15)  + " Seconds!" + Environment.NewLine);
		
		foreach (string s in factions)
		{
			LogToConsole(s);
			SendText("/f who " + s);				
			System.Threading.Thread.Sleep(5000);//How Long The Bot Takes In Between Each Faction (5 Seconds) - would not recommend less than "2000" 
		}
		System.Threading.Thread.Sleep(time);
		UnloadBot();
		
	}
//------------------------------------------------------------------------------------------------------------------------------------	
public override void GetText(string text)
			{
			string path = System.IO.Directory.GetCurrentDirectory() + "\\Factions\\logs.txt";
			string path2 = System.IO.Directory.GetCurrentDirectory() + "\\Factions";
			string message = "";
			string username = "";
			string fac = "";
			string[] factions = File.ReadAllLines(@path2 + "\\factions.txt");
			
			if (IsChatMessage (text, ref message, ref username)) 
				{
				if (text.Contains("____________________"))
					{
					message = text.Replace(',', '.');
					message = text.Replace('_'.ToString(), String.Empty);
					File.AppendAllText(@path, GetVerbatim(message) + " " + DateTime.Now + Environment.NewLine);
					}

				else if (text.Contains("§f§bMembers online:"))
					{
					message = text.Replace(',', '.');	
					message = GetVerbatim(message);
					message = message.Replace("***", String.Empty);
					message = message.Replace("**", String.Empty);
					message = message.Replace('*'.ToString(),String.Empty);
					message = message.Replace('-'.ToString(),String.Empty);
					File.AppendAllText(@path, message + Environment.NewLine);
					
					message = message.Replace(' '.ToString(),String.Empty);
					message = message += ".";
					int index;
					message = message.Replace("Membersonline:", String.Empty);
					LogToConsole(message);
						while(message.Contains('.'))
						{
							index = message.IndexOf('.');
							if(index > 0) 	
							{
	
								var result = message.Substring(0, index);
								File.AppendAllText(@path2 + "\\output.txt", result + Environment.NewLine);
								message = message.Substring(message.IndexOf('.') + 1);
							}
							else
							{
								message = message.Replace('.'.ToString(),String.Empty);
							}
						}
					
					
					string[] online = File.ReadAllLines(@path2 + "\\output.txt");
					int numb = online.Length;
					

					File.AppendAllText(@path, "Number of Members online: " + numb + Environment.NewLine);
					File.AppendAllText(@path, "+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+" + Environment.NewLine);
					File.AppendAllText(@path, Environment.NewLine);
					System.IO.File.WriteAllText(@path2 + "\\output.txt", String.Empty);

					}
					
					}
					
				}	

//------------------------------------------------------------------------------------------------------------------------------------  
}