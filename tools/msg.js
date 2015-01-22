MeteredMSG = '<h3><font color="red">刷電子票證(悠遊卡、一卡通、臺灣通、遠通ETC)8公里免費</font></h3>';
CitybusMSG = '<h3><font color="red">每月22日為「公車日」，當日持電子票證搭乘市區公車(府城客運)免費</font></h3>'
PromotionMSG = '<h3>2hr內轉乘再優惠9元</h3><h3>65歲以上台南市民憑身分證免費搭乘</h3>';
TimeScheduleMSG = '<p><h2>除了起站為發車時間，其餘站點皆為預估時間，敬請提早候車。</h2></p>';
W_message = '<font color="#0000FF">W</font>表示僅平日行駛';
L_message = '<font color="#FF0000">L</font>表示低地板公車';
H_message = '<font color="red">H</font>表示僅假日行駛';
copyrightMSG = '<p>Copyright (c) 2014 Tainan Bus for FUN. All rights reserved. | Contact with <a href="mailto:tainanbusforfun@outlook.com" rel="nofollow">administrator</a>.</p>';

function Announcement(str){
	document.write('<table cellSpacing=0 borderColorDark=#ffffff width=350 borderColorLight=purple border=1>\
		<tr>\
			<td bgColor=#e5c1fe style="padding: 30px 10px;">\
				<font color=#FF0000 size=2>' + str + '</font>\
			</td>\
		</tr>\
	</table>');
}