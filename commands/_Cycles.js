// Cycles v.1.01 - Max Smirnov. 2015
function Cycles()
{
	var param = moi.command.getCommandLineParams(), exp=(param =='noexport')?false:true;
	if ( param=='reset') { moi.ui.commandUI.resetPaths(); }
	moi.ui.commandUI.Cycles(exp);
}
Cycles();	