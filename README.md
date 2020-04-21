# Wulfpack Pawty Discord Bot

Do your worst to ACo '14 discord server

### Variables

Variables are set in variables.json.  Variables can be added for Users, Channels, Roles, and Emojis.  The tags can be used in rules.json to filter conditions that rules trigger on.  Tags will still need double quotes in the rules.  Comments cannot be added to json files.

### Rules

Each rule is given a name and is broken into 2 parts.  The "Conditions" filters the rule based on events that happen in discord, and "response" is how the bot will respond.  The bot currently gets alerted to messages and when users log into and out of the voice channel.

#### Message Events

Message events can filter on the following keys

```
"message user"        ->        Trigger on message from a specific user (use tag)
"message contents"    ->        Trigger on message with a specific set of words
"message user role"   ->        Trigger on message from anyone with a role assigned (use tag)
"message channel"     ->        Trigger on message from a specific channel (use tag)
"message file"        ->        Trigger if a message has a file (Bool)
```

Only use these keys if you are expecting to filter on a message.  Not a voice event.  File is the only key that accepts "true" or "false"

Blank options will trigger on everything.  The following rule will trigger on every message.

```
 "rule 1":{
        "conditions":{
            "message user": "",
            "message contents": "",
            "message user role": "",
            "message channel": ""
        },
```

#### Voice Events

Voice events can filter on the following keys

```
"voice user login"      ->      Trigger if a user logs in to the voice channel
"voice user logout"     ->      Trigger if a user logs out of the voice channel
```

Only use these keys if you are expecting to filter on a voice event.  Not a message event.

Blank options will trigger on everything.  The following rule will trigger every time someone joins or leave the chat.

```
"conditions":{
            "voice user login": "",
            "voice user logout": ""
        },
```

