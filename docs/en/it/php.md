# PHP


<WikipediaCitation
  language="en"
  title="PHP"
  access="2023/06/16"
  version="1160063106"
/>


## Overview

PHP is a general-purpose scripting language geared towards web development.
It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.
The PHP reference implementation is now produced by the PHP Group.
PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.

The standard PHP interpreter, powered by the Zend Engine, is free software released under the PHP License.
PHP has been widely ported and can be deployed on most web servers on a variety of operating systems and platforms.

The PHP language evolved without a written formal specification or standard until 2014, with the original implementation acting as the de facto standard that other implementations aimed to follow.
Since 2014, work has gone on to create a formal PHP specification.


## History

### Early history

PHP development began in 1993 when Rasmus Lerdorf wrote several Common Gateway Interface (CGI) programs in C, which he used to maintain his personal homepage.
He extended them to work with web forms and to communicate with databases, and called this implementation "Personal Home Page/Forms Interpreter" or PHP/FI.

PHP/FI could be used to build simple, dynamic web applications.
To accelerate bug reporting and improve the code, Lerdorf initially announced the release of PHP/FI as "Personal Home Page Tools (PHP Tools) version 1.0" on the Usenet discussion group comp.infosystems.www.authoring.cgi on 8 June 1995.
This release already had the basic functionality that PHP has today.
This included Perl-like variables, form handling, and the ability to embed HTML.
The syntax resembled that of Perl, but was simpler, more limited and less consistent.

An example of the early PHP syntax:

```
<!--include /text/header.html-->

<!--getenv HTTP_USER_AGENT-->
<!--if substr $exec_result Mozilla-->
  Hey, you are using Netscape!<p>
<!--endif-->

<!--sql database select * from table where user='$username'-->
<!--ifless $numentries 1-->
  Sorry, that record does not exist<p>
<!--endif exit-->
  Welcome <!--$user-->!<p>
  You have <!--$index:0--> credits left in your account.<p>

<!--include /text/footer.html-->
```
